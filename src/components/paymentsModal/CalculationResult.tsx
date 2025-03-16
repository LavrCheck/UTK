import './CalculationResult.sass'
import {RadioGroup} from "../UI/radioGroup/RadioGroup.tsx";
import {useEffect, useState} from "react";

const options: string[] = ['в год', 'в месяц']

export const CalculationResult = (
    {
        sumCredit,
        selectedMonths,
    }: {
        sumCredit: number | string;
        selectedMonths: number;
    }
) => {

    const [selectedPeriod, setSelectedPeriod] = useState<string>(options[1])
    const [result, setResult] = useState<number>(0)

    useEffect(() => {
        setResult(() => {
            const monthlyPayment = Number(sumCredit) / selectedMonths
            return selectedPeriod === 'в месяц' ? monthlyPayment : monthlyPayment * 12
        })
    }, [selectedMonths, selectedPeriod, sumCredit])

    return <>
        <div className={'CalculationResult'}>
            <strong>Итого ваш платеж по кредиту:</strong>
            <RadioGroup
                options={options}
                selectedOption={selectedPeriod}
                onChange={(value: string) => setSelectedPeriod(value)}
            />
            <span>
                {result.toLocaleString('ru-RU')} рублей
            </span>
        </div>
    </>
}
