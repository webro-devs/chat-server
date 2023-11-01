import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { MessageModule } from './modules/message/message.module';
import { FolderModule } from './modules/folder/folder.module';
import { ChatModule } from './modules/chat/chat.module';
import { GroupModule } from './modules/group/group.module';
import { ChannelModule } from './modules/channel/channel.module';
import { ContactModule } from './modules/contact/contact.module';
import { WebsocketModule } from './modules/websocket/websocket.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [
    UserModule,
    MessageModule,
    FolderModule,
    ChatModule,
    GroupModule,
    ChannelModule,
    ContactModule,
    WebsocketModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
