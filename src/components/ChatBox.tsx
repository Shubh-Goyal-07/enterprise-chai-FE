interface ChatBoxProps {
    message: string;
}
export default function ChatBox({message}: ChatBoxProps) {
    const currentTime = new Date().toLocaleTimeString();
    return (
        <div className="w-full p-4 bg-white rounded-2xl shadow-md">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                </div>
                <div className="ml-3">
                    <div className="text-sm text-grayCustom font-extralight">{currentTime}</div>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}
