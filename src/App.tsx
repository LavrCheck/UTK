import './App.sass'
import {Button} from "./components/UI/Button.tsx";
import {useState} from "react";
import {PaymentsModal} from "./components/paymentsModal/PaymentsModal.tsx";

function App() {

    const [isPaymentsModalOpen, setIsPaymentsModalOpen] = useState(false);

    return (
        <div className="App">
            <Button
                label={'Расчет платежей'}
                outline={true}
                onClick={() => {
                    setIsPaymentsModalOpen(true)
                }}
            />

            <PaymentsModal
                isOpen={isPaymentsModalOpen}
                onClose={() => setIsPaymentsModalOpen(false)}
            />
        </div>
    )
}

export default App
