import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import Login from '../app/pages/login';
import Atendimentos from '../app/pages/atendimentos';
import Profissionais from '../app/pages/profissionais';
import Registro from '../app/pages/registro';

// Páginas
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                tabBarActiveTintColor: 'rgb(199, 69, 49)',
                tabBarInactiveTintColor: '#eae8e1',

                tabBarIcon: ({ color, size, focused }) => {
                    let iconName = 'ellipse-outline';

                    if (route.name === 'Atendimentos') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    }

                    if (route.name === 'Profissionais') {
                        iconName = focused ? 'people' : 'people-outline';
                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                }
            })}
        >
            <Tab.Screen
                name="Atendimentos"
                component={AtendimentosScreen}
            />

            <Tab.Screen
                name="Profissionais"
                component={ProfissionaisScreen}
            />
        </Tab.Navigator>
    );
}

function menuSuperior() {
    return (
        <Drawer.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                drawerActiveTintColor: '#ff914d',
                drawerInactiveTintColor: '#eae8e1',
                drawerIcon: ({ color, size, focused }) => {
                    let iconName = 'ellipse-outline';
                    if (route.name === 'Início'){
                        iconName = focused ? 'paw' : 'paw-outline';
                    }

                    if (route.name === 'Atendimentos') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    }

                    if (route.name === 'Profissionais') {
                        iconName = focused ? 'people' : 'people-outline';
                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                }
            })}
        >

            <Drawer.Screen
                name="Início"
                component={Tabs}
            />

            <Drawer.Screen
                name="Atendimentos"
                component={AtendimentosScreen}
            />

            <Drawer.Screen
                name="Profissionais"
                component={ProfissionaisScreen}
            />
        </Drawer.Navigator>
    );
}

export default function Rotas(){
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Registro' component={Registro} options={{headerShown: false}}/>
        <Stack.Screen name='Principal' component={menuSuperior} options={{headerShown: false}}/>
    </Stack.Navigator>
}

export default Tabs();