# WhatsApp Business API with AI Integration

A Node.js/Express.js application that integrates WhatsApp Business API with Google Gemini AI to provide automated messaging and intelligent responses. The application uses MongoDB for message persistence and implements a clean architecture with singleton pattern for service management.

## 🚀 Features

- **WhatsApp Business API Integration**: Send and receive messages through WhatsApp Business API
- **AI-Powered Responses**: Uses Google Gemini AI (Gemini 2.5 Flash) to generate intelligent replies to incoming messages
- **Message History**: Maintains conversation history using MongoDB for context-aware responses
- **Webhook Support**: Handles WhatsApp webhook verification and message processing
- **TypeScript Support**: Fully typed application with modern TypeScript features
- **Singleton Pattern**: Efficient service management using singleton pattern
- **Database Integration**: MongoDB integration for message persistence
- **Health Check**: Built-in health monitoring endpoint

## 📋 Prerequisites

- Node.js (v14 or higher)
- WhatsApp Business Account
- Google Gemini API Key
- Facebook Developer Account (for WhatsApp Business API)
- MongoDB instance (local or cloud)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd express-mini-app-wcapi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory with the following variables:
   ```env
   PHONE_NUMBER_ID=your_phone_number_id
   VERSION=v18.0
   WHATSAPP_USER_ACCESS_TOKEN=your_whatsapp_access_token
   WEBHOOK_VERIFICATION_PASSWORD=your_webhook_verification_password
   PORT=your_port
   GEMINI_API_KEY=your_gemini_api_key
   MONGO_URI=your_mongodb_connection_string
   ```

## 🚀 Usage

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

The server will start on port 8558 (or the port specified in your environment variables).

## 📡 API Endpoints

### Health Check
- **GET** `/health` - Returns server status

### Message Management
- **POST** `/send-message` - Send a message to a WhatsApp number
  ```json
  {
    "phoneNumber": "1234567890",
    "message": "Hello, this is a test message"
  }
  ```

### Webhook Endpoints
- **GET** `/webhook` - WhatsApp webhook verification
- **POST** `/webhook` - Receive and process incoming WhatsApp messages

## 🏗️ Project Structure

```
src/
├── app.ts                           # Main application entry point
├── config/
│   └── app.config.ts               # Environment configuration
├── controller/
│   ├── message.controller.ts        # Message handling controller
│   ├── webhook.controller.ts        # Webhook handling controller
│   └── webhook.json                # Sample webhook payload
├── dao/
│   └── message.dao.ts              # Data access object for messages
├── dto/
│   ├── messageHistory.dto.ts       # Message history data transfer object
│   └── webhookVerification.dto.ts  # Webhook verification interfaces
├── model/
│   └── message.model.ts            # Message model and schema
└── service/
    ├── gemini.service.ts           # Google Gemini AI integration
    ├── message.service.ts          # WhatsApp message service
    └── webhook.service.ts          # Webhook processing service
```

## 🔧 Configuration

### WhatsApp Business API Setup
1. Create a Facebook Developer Account
2. Set up a WhatsApp Business Account
3. Configure webhook URL: `https://your-domain.com/webhook`
4. Set verification token in environment variables

### Google Gemini API Setup
1. Get API key from Google AI Studio
2. Add the key to your `.env` file

### MongoDB Setup
1. Set up a MongoDB instance (local or cloud)
2. Add the connection string to your `.env` file

## 🧩 Architecture

The application follows a clean architecture pattern with:

- **Controllers**: Handle HTTP requests and responses
- **Services**: Business logic and external API integrations (using singleton pattern)
- **DAO (Data Access Object)**: Database operations abstraction
- **DTOs**: Type definitions for data transfer objects
- **Models**: Database schemas and interfaces
- **Configuration**: Centralized environment variable management

### Key Services

- **MessageService**: Handles WhatsApp message sending and database operations
- **WebhookService**: Processes incoming webhook notifications and orchestrates AI responses
- **GeminiService**: Integrates with Google Gemini AI for response generation
- **MessageDao**: Handles database operations for message persistence

### Database Schema

The application uses MongoDB with the following message schema:
```typescript
{
  userId: string;        // WhatsApp phone number
  role: 'user' | 'model'; // Message sender (user or AI model)
  content: string;       // Message content
  createdAt: Date;       // Creation timestamp
  updatedAt: Date;       // Last update timestamp
}
```

## 🔄 Message Flow

1. **Incoming Message**: WhatsApp webhook receives a message
2. **Verification**: Webhook service verifies the message source
3. **History Retrieval**: System retrieves last 10 messages for context
4. **AI Processing**: Gemini AI generates a contextual response
5. **Database Storage**: Both user message and AI response are stored
6. **Response Sending**: AI response is sent back via WhatsApp API

## 🔒 Security

- Environment variables for sensitive data
- Webhook verification for secure message processing
- Error handling for failed API calls
- MongoDB connection security

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PHONE_NUMBER_ID` | WhatsApp Business phone number ID | Yes |
| `VERSION` | WhatsApp API version | Yes |
| `WHATSAPP_USER_ACCESS_TOKEN` | WhatsApp access token | Yes |
| `WEBHOOK_VERIFICATION_PASSWORD` | Webhook verification password | Yes |
| `PORT` | Server port | No (default: 8558) |
| `GEMINI_API_KEY` | Google Gemini API key | Yes |
| `MONGO_URI` | MongoDB connection string | Yes |

## 🚀 Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. Ensure your webhook URL is accessible from the internet for WhatsApp webhook verification.

## 📊 Dependencies

### Production Dependencies
- `@google/genai`: Google Gemini AI integration
- `axios`: HTTP client for API requests
- `dotenv`: Environment variable management
- `express`: Web framework
- `mongoose`: MongoDB object modeling

### Development Dependencies
- `@types/express`: TypeScript types for Express
- `@types/node`: TypeScript types for Node.js
- `ts-node-dev`: TypeScript development server
- `typescript`: TypeScript compiler

<!-- ## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Note**: This application requires proper WhatsApp Business API setup, Google Gemini API access, and MongoDB instance. Make sure to follow the official documentation for all services for proper configuration. -->