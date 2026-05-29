import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { atendimentos } from '../dados/profissionais'; // Verifique se o caminho do mock está correto

export default function Atendimentos() {
    return (
        <View style={styles.container}>
            <FlatList
                data={atendimentos}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.headerCard}>
                            <Text style={styles.petName}>🐾 {item.pet}</Text>
                            <Text style={styles.time}>{item.horario}</Text>
                        </View>
                        <Text style={styles.serviceText}>Serviço: <Text style={styles.bold}>{item.servico}</Text></Text>
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
        borderLeftColor: 'rgb(199, 69, 49)',
    },
    headerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    petName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    time: {
        fontSize: 14,
        color: '#ff914d',
        fontWeight: '600',
        backgroundColor: '#fff3eb',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    serviceText: {
        fontSize: 15,
        color: '#666',
    },
    bold: {
        fontWeight: '600',
        color: '#111',
    },
});