import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home () {

    const [horaTrabalhada, setHoraTrabalhada] = useState("")
    const [valorHoraTrabalhada, setValorHoraTrabalhada] = useState("")
    const [valorTotal, setValorTotal] = useState<string | number>("")
    const [frequenciaPagamento, setFrequenciaPagamento] = useState("")

    const calcularSalario = () => {
        const horas = parseFloat(horaTrabalhada)
        const valor = parseFloat(valorHoraTrabalhada)
        const total = horas * valor 
        setValorTotal(total)
    }


    return(
        <View className="flex-1 justify-center items-center p-6 bg-white">
            <Text className="text-xl font-semibold mb-6">Calculador de Salário Bruto</Text>

            <TextInput
                placeholder="Digite aqui sua hora trabalhada"
                value={horaTrabalhada}
                onChangeText={Text => setHoraTrabalhada(Text)}
                keyboardType="numeric"
                className="border border-gray-400 rounded w-64 px-4 py-2 mb-4"
            />

            <TextInput
                placeholder="Digite aqui o valor da sua hora trabalhada"
                value={valorHoraTrabalhada}
                onChangeText={Text => setValorHoraTrabalhada(Text)}
                keyboardType="numeric"
                className="border border-gray-400 rounded w-64 px-4 py-2 mb-6"
            />

            <TouchableOpacity
                onPress={calcularSalario}
                className="bg-blue-600 rounded px-6 py-3 mb-6"
            >
                <Text className="text-white font-semibold">Clique aqui para saber o seu salário</Text>
            </TouchableOpacity>

            <Text className="text-lg font-medium">Valor bruto do seu salário: {valorTotal}</Text>
        </View>
    )
}
