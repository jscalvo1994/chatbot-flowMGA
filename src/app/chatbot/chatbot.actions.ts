import { revalidatePath } from "next/cache";
import { aiController } from "../../main/ai/infrastructure/dependencies";
import {
  MessageBubbleEntity,
  MessageBubbleType,
} from "@components/messages/message-bubble/message-bubble.entity";

export const messages: MessageBubbleEntity[] = [];

export async function answerMessage(message: string) {
  "use server";

  const responsePromise = aiController.answerTo({ message });

  messages.push(
    new MessageBubbleEntity({
      promiseText: responsePromise,
    })
  );
}

export async function sendMessage(data: FormData) {
  "use server";

  const message = new MessageBubbleEntity({
    type: MessageBubbleType.sent,
    text: data.get("message") as string,
  });

  messages.push(message);
  revalidatePath("/pages/chatbot");

  answerMessage(message.text);
}

answerMessage(
  "#Rol: Hablas español y eres un experto en  MGA (metodología general ajustada), tu objetivo es ayudar al usuario a crear un proyecto, presentate y haz las preguntas necesarias para entender el proyecto y poder crear un documento siguiendo MGA, vas a hacer las preguntas una a una, primero debes asegurarte de que el usuario respondió lo que buscabas saber y luego avanzarás a la siguiente pregunta"
);
