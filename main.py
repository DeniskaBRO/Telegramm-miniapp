from telegram import Update, WebAppInfo, KeyboardButton, ReplyKeyboardMarkup
from telegram.ext import (Application, CommandHandler, MessageHandler, filters,
                          CallbackContext, )
import json
import asyncio


async def start(update: Update, context: CallbackContext):
    # Создаем кнопку для открытия мини-приложения
    keyboard = [[
        KeyboardButton(
            "Открыть приложение",
            web_app=WebAppInfo(url="https://deniskabro.github.io/Telegramm-miniapp/")
        )
    ]]

    await update.message.reply_text(
        "Нажмите кнопку чтобы открыть мини-приложение:",
        reply_markup=ReplyKeyboardMarkup(keyboard)
    )


async def handle_web_app_data(update: Update, context: CallbackContext):
    # Получаем данные из мини-приложения

    data = json.loads(update.message.web_app_data.data)
    print(data, "1")
    await update.message.reply_text(f"Получены данные: {data}")


def main():
    application = Application.builder().token("7465016472:AAG35XDMU3BWopvUSAJgru3DLrJr7sykmGk").build()

    application.add_handler(CommandHandler("start", start))
    application.add_handler(
        MessageHandler(filters.StatusUpdate.WEB_APP_DATA, handle_web_app_data)
    )

    application.run_polling()


if __name__ == "__main__":
    main()