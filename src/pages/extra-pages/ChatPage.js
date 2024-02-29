// ChatPage.js
import React, { useState } from 'react';
import { Box, Grid, Paper, List, ListItem, ListItemText, TextField, Button } from '@mui/material';

const ChatPage = () => {
  const [currentChat, setCurrentChat] = useState(null);
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([
    { id: 1, name: 'Chat 1', messages: [] },
    { id: 2, name: 'Chat 2', messages: [] },
  ]);

  const handleChatSelection = (chatId) => {
    const chat = chats.find(c => c.id === chatId);
    setCurrentChat(chat);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    // Assuming 'messages' is an array of string messages.
    // Update logic as per your data structure.
    const updatedChats = chats.map(chat => {
      if (chat.id === currentChat.id) {
        return { ...chat, messages: [...chat.messages, message] };
      }
      return chat;
    });
    setChats(updatedChats);
    setMessage('');
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper elevation={3}>
            <List>
              {chats.map((chat) => (
                <ListItem button key={chat.id} onClick={() => handleChatSelection(chat.id)}>
                  <ListItemText primary={chat.name} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper elevation={3} sx={{ p: 2, minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
              {currentChat && currentChat.messages.map((msg, index) => (
                <Box key={index} sx={{ my: 2, p: 2, bgcolor: 'background.paper', borderRadius: '5px' }}>
                  {msg}
                </Box>
              ))}
            </Box>
            <Box>
              <TextField
                fullWidth
                variant="outlined"
                label="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{ mb: 1 }}
              />
              <Button variant="contained" onClick={handleSendMessage}>Send</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatPage;
