import styles from "./Input.module.css"

interface InputProps {
    nameInput: string
    setValue: (value: number) => void
}

export function Input({nameInput, setValue}: InputProps){
    
    return (
        <div className={styles.wrapper}>
            <label htmlFor={nameInput}>{nameInput} (preço por litro)</label>
            <input 
                type="number"
                placeholder="exemplo 1.90"
                min="1"
                step="0.01"
                required
                id={nameInput}
                onChange={(e) => setValue(Number(e.target.value))}
            />
        </div>
    )
}