export type Message = {
    role: string;
    icon: string;
    time: string;
    message: string;
    bgColor: string;
  };
  
export type ChatProps = {
    messages: Message[];
  };