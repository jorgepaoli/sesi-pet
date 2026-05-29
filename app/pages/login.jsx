import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f5f7fa" />
            
            {/* Cabeçalho */}
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Bem-vindo(a) ao</Text>
                <Text style={styles.brand}>SESI-Pet 🐾</Text>
                <Text style={styles.subtitle}>Insira seus dados para acessar</Text>
            </View>

            {/* Formulário */}
            <View style={styles.form}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='exemplo@email.com'
                    placeholderTextColor="#a0aec0"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                
                <Text style={styles.label}>Senha</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='••••••••'
                    placeholderTextColor="#a0aec0"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
                
                {/* Botão de Entrar */}
                <TouchableOpacity 
                    style={styles.buttonPrimary} 
                    onPress={() => navigation.replace('Principal')}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonPrimaryText}>Entrar</Text>
                </TouchableOpacity>

                {/* Botão de Cadastro */}
                <TouchableOpacity 
                    style={styles.buttonSecondary} 
                    onPress={() => navigation.replace('Registro')}
                >
                    <Text style={styles.buttonSecondaryText}>
                        Não tem uma conta? <Text style={styles.signUpText}>Cadastre-se</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f7fa', // Fundo claro e moderno
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    headerContainer: {
        marginBottom: 40,
    },
    title: {
        fontSize: 24,
        color: '#4a5568',
        fontWeight: '500',
    },
    brand: {
        fontSize: 36,
        color: '#00539C', // Azul forte (identidade SESI)
        fontWeight: 'bold',
        marginTop: 4,
    },
    subtitle: {
        fontSize: 16,
        color: '#718096',
        marginTop: 8,
    },
    form: {
        width: '100%',
    },
    label: {
        fontSize: 14,
        color: '#4a5568',
        fontWeight: '600',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: '#1a202c',
        marginBottom: 20,
        // Sombra leve para o input (iOS e Android)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    buttonPrimary: {
        backgroundColor: '#00539C', // Azul institucional
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#00539C',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    buttonPrimaryText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonSecondary: {
        alignItems: 'center',
        marginTop: 24,
        paddingVertical: 8,
    },
    buttonSecondaryText: {
        color: '#718096',
        fontSize: 14,
    },
    signUpText: {
        color: '#00539C',
        fontWeight: 'bold',
    }
});