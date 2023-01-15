export const AUTHOR = {
  user: "user",
  bot: "bot",
};

export const initChats = {
  id1: {
    name: "Chat1",
    messages: [{ text: "FirstMessage", author: AUTHOR.bot }],
  },
  id2: {
    name: "Chat2",
    messages: [{ text: "FirstMessage too", author: AUTHOR.bot }],
  },
};

export const chats = [{ id: 1, name: "Default" }];
