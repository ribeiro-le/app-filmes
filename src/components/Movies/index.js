import React, { useState } from "react";
import { Modal } from 'react-native'
import {
    Container,
    Banner,
    Title,
    AreaButton,
    Button,
    NameButton,
    ModalView
} from './styles'

import ModalDetail from "../ModalDetail";

function Movies({ data }) {

    const [modalVisible, setModalVisible] = useState(false);


    return (
        <Container>

            <Title>{data.nome}</Title>

            <Banner
                source={{ uri: `${data.foto}` }}
            ></Banner>

            <AreaButton>
                <Button onPress={() => setModalVisible(true)}>
                    <NameButton>Leia mais</NameButton>
                </Button>
            </AreaButton>

            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>

                <ModalView>
                    <ModalDetail
                        descriptionMovie={data.sinopse}
                        title={data.nome}
                        closeModal={() => setModalVisible(false)}>
                    </ModalDetail>

                </ModalView>
            </Modal>
        </Container>
    );
}

export default Movies;