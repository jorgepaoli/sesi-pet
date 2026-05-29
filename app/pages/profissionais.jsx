import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { profissionais } from '../dados/profissionais';

export default function Profissionais() {
    return (
        <View style={styles.container}>
            <FlatList
                data={profissionais}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.name}>Dr(a). {item.nome}</Text>
                        <Text style={styles.specialty}>Especialidade: <Text style={styles.bold}>{item.especialidade}</Text></Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    listContainer: {
        padding: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
        borderLeftWidth: 5,
        borderLeftColor: '#ff914d',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    specialty: {
        fontSize: 15,
        color: '#666',
    },
    bold: {
        fontWeight: '600',
        color: '#111',
    },
});