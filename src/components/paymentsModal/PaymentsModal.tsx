import './PaymentsModal.sass'
import closeIcon from '../../assets/closeIcon.svg'
import {useEffect, useState} from "react";
import {Input} from "../UI/Input.tsx";
import {TextButton} from "../UI/TextButton.tsx";
import {RadioGroup} from "../UI/radioGroup/RadioGroup.tsx";
import {CalculationResult} from "./CalculationResult.tsx";
import {Button} from "../UI/Button.tsx";

const monthsQuantities: number[] = [12, 24, 36, 48]

export const PaymentsModal = (
    {
        isOpen,
        onClose
    }: {
        isOpen: boolean;
        onClose: () => void;
    }
) => {

    const [sumCredit, setSumCredit] = useState<number | string>('')
    const [selectedMonths, setSelectedMonths] = useState<number>(monthsQuantities[0])
    const [isCalculationVisible, setIsCalculationVisible] = useState<boolean>(false)

    const resetState = () => {
        setSumCredit('')
        setSelectedMonths(monthsQuantities[0])
        setIsCalculationVisible(false)
    }

    useEffect(() => {
        resetState()
    }, [isOpen])

    if (!isOpen) {
        return <></>
    }

    return <>
        <div className="PaymentsModal" onClick={onClose}>
            <div className={'content'} onClick={(e) => e.stopPropagation()}>
                <div className={'close-icon-container'}>
                    <img src={closeIcon} alt="close-icon" onClick={onClose}/>
                </div>
                <span className={'header'}>Платежи по кредиту</span>
                <p>Введите сумму кредита и выберите срок, на который вы хотите его оформить.</p>
                <p>Мы автоматически рассчитаем для вас ежемесячный платеж, чтобы вы могли лучше спланировать свои
                    финансы.</p>
                <Input
                    label={'Ваша сумма кредита'}
                    placeholder={'Введите данные'}
                    value={sumCredit}
                    onChange={(s: string | number) => setSumCredit(s)}
                />
                <div>
                    <TextButton
                        label={'Рассчитать'}
                        onClick={() => {
                            setIsCalculationVisible(true)
                        }}
                    />
                </div>
                <div className={'months-selector-container'}>
                    <strong>Количество месяцев?</strong>
                    <RadioGroup
                        selectedOption={selectedMonths}
                        options={monthsQuantities}
                        onChange={(option) => setSelectedMonths(option)}
                    />
                </div>
                {isCalculationVisible &&
                    <CalculationResult
                        selectedMonths={selectedMonths}
                        sumCredit={sumCredit}
                    />
                }
                <Button
                    label={'Добавить'}
                    onClick={() => {
                    }}
                />
            </div>
        </div>
    </>
}
