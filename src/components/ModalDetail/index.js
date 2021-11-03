import React, { useState } from 'react'
import {
    ButtonClose,
    Name,
    Container,
    Header,
    Description
} from './styles.js'

import Icon from 'react-native-vector-icons/Feather'

function ModalDetail({ title, closeModal, descriptionMovie }) {
    return (
        <Container>
            <Header>
                <ButtonClose onPress={closeModal}>
                    <Icon name="x" size={30} color="#fff"></Icon>
                </ButtonClose>
                <Name numberOfLines={1}>{title}</Name>
            </Header>
            <Description>{descriptionMovie}</Description>
        </Container>

    );

}

export default ModalDetail;