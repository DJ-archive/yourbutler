package com.ficrew.yourbutler.Chat.infrastructure.config;

import com.ficrew.yourbutler.Chat.application.CreateMessageProcessor;
import com.ficrew.yourbutler.Chat.domain.repository.ChatRepository;
import com.ficrew.yourbutler.Chat.domain.repository.MessageRepository;
import com.ficrew.yourbutler.member.domain.repository.MemberRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ChatConfig {

    @Bean
    public CreateMessageProcessor createMessageProcessor(
            ChatRepository chatRepository, MessageRepository messageRepository
    ) {
        return new CreateMessageProcessor(
                chatRepository, messageRepository
        );
    }

}