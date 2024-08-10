import { ChatProps} from "@/types/messages";

import { ScrollArea } from "@/components/ui/scroll-area"


const isValidURL = (message:string) => {
  // Regular expression pattern for URL validation
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlPattern.test(message);
};
const Chat: React.FC<ChatProps> = ({ messages }) => {

return(
  <ScrollArea className="grid gap-4 rounded-lg border p-4 h-[400px]">
  { messages.sort((a, b) => {
  return new Date(a.time).getTime() - new Date(b.time).getTime();
}).map((msg, index) => (
    <div key={index} className="flex items-start gap-4">
      <div
        className="rounded-full w-10 h-10 flex items-center justify-center text-2xl"
        style={{ backgroundColor: msg.bgColor }}
      >
        {msg.icon}
      </div>
      <div className="grid gap-1 text-sm">
        <div className="flex items-center gap-2">
          <div className="font-medium">{msg.role}</div>
          <div className="text-muted-foreground">{msg.time}</div>
        </div>
        <div>
        {isValidURL(msg.message) ? (
            <img src={msg.message} alt="message" style={{ maxWidth: '100%', maxHeight: '200px' }}/>
          ) : (
            <p>{msg.message}</p>
          )}
        </div>
      </div>
    </div>
  ))}
</ScrollArea>
)
}
export default Chat;