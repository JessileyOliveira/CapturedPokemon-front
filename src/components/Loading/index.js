import React from 'react';
import { Container, LoadingImage } from './styles';
import loading from '../../assets/images/loading.gif';

export default function Loading() {

    return (
        <Container>
            <LoadingImage source={loading} />
        </Container>
    );
}