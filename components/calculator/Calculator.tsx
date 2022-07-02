import styles from './Calculator.module.css';

export default function Calculator(){

    let result: number

    function sumFunction(n1: number, n2: number): number{
        return result = n1 + n2
    }

    function subFunction(n1: number, n2: number): number{
        return result= n1 - n2
    }

    function multFunction(n1: number, n2: number): number{
        return result= n1 * n2
    }

    function divFunction(n1: number, n2: number): number{
        return result= n1 / n2
    }

    function operations(){
        sumFunction(1,2);
        return result;
    }

    return(
        <>
        <div className={styles.container}>
            <div className={styles.display}><p>{operations()}</p></div>
            <div className={styles.keyboard}>
            <div className={styles.row}>
                <input className={styles.buttonNumber} type="button" value="7" onclick="input('7')" />
                <input className={styles.buttonNumber} type="button" value="8" onclick="input('8')" />
                <input className={styles.buttonNumber} type="button" value="9" onclick="input('9')" />
                <input className={styles.buttonNumber} type="button" value="DEL" id="del" onclick="del()" />
            </div>
            <div className={styles.row}>
                <input className={styles.buttonNumber} type="button" value="4" onclick="input('4')" />
                <input className={styles.buttonNumber} type="button" value="5" onclick="input('5')" />
                <input className={styles.buttonNumber} type="button" value="6" onclick="input('6')" />
                <input className={styles.buttonNumber} type="button" value="+" onclick={sumFunction(1, 2)} />
            </div>
            <div className={styles.row}>
                <input className={styles.buttonNumber} type="button" value="1" onclick="input('1')" />
                <input className={styles.buttonNumber} type="button" value="2" onclick="input('2')" />
                <input className={styles.buttonNumber} type="button" value="3" onclick="input('3')" />
                <input className={styles.buttonNumber} type="button" value="-" onclick={subFunction(1, 2)} />
            </div>
            <div className={styles.row}>
                <input className={styles.buttonNumber} type="button" value="." onclick="input('.')" />
                <input className={styles.buttonNumber} type="button" value="0" onclick="input('0')" />
                <input className={styles.buttonNumber} type="button" value="/" onclick={divFunction(1, 2)} />
                <input className={styles.buttonNumber} type="button" value="x" onclick={multFunction(1, 2)} />
            </div>
            <div className={styles.row}>
                <input className={styles.buttonNumber} type="button" value="RESET" id="reset" onclick="reset()" />
                <input className={styles.buttonNumber} type="button" value="=" id="equals" onclick="calc()" />
            </div>
            </div>
        </div>
        </>
    )
    
}