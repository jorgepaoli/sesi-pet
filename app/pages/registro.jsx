import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Registro({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Bem-vindo(a) ao SESI-Pet!</Text>
                <Text style={styles.subtitle}>Cadastre-se para continuar</Text>
                
                <TextInput 
                    style={styles.input}
                    placeholder='Insira seu e-mail'
                    placeholderTextColor="#a0a0a0"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor="#a0a0a0"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Confirme sua senha'
                    placeholderTextColor="#a0a0a0"
                    value={confSenha}
                    onChangeText={setConfSenha}
                    secureTextEntry
                />

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.replace('Principal')}
                >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        width: '100%',
        maxWidth: 380,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff914d',
        textAlign: 'center',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 24,
    },
    input: {
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: 'rgb(199, 69, 49)',
        borderRadius: 8,
        padding: 14,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});