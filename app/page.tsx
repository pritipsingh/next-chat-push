"use client"
import Image from 'next/image'
import { ChatView, ChatUIProvider, darkChatTheme, ChatViewComponent } from "@pushprotocol/uiweb";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { getPublicClient } from '@wagmi/core'
export default function Home() {
  const walletClient = getPublicClient()
  console.log(walletClient)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <ChatUIProvider theme={darkChatTheme}>
      <ChatViewComponent
        chatId="1c07072548248e3b465f7fe9e61d3f32d6b779033d933326f221cde558882e46"
        limit={10}
        isConnected={true}
       
      />
    </ChatUIProvider>
  
    {/* <ConnectButton /> */}
    </main>
  )
}
