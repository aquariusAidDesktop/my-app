import Header from "@/components/Header/Header";
import styles from "./page.module.css"

export default function Home() {
    return (
        <>
            <Header>
                <div className={styles.headerContainer}>
                        <div className={styles.header}>Планы</div>
                    </div>
                <div className={styles.planContainer}>
                    <div className={styles.planDushContainer}>
                        <div className={styles.activePlan}>
                            <p>план 1</p>
                        </div>
                        <div className={styles.activePlan}>
                            <p>план 2</p>
                        </div>
                        <div className={styles.activePlan}>
                            <p>план 3</p>
                        </div>
                        <div className={styles.activePlan}>
                            <p>план 4</p>
                        </div>
                    </div>
                    <div className={styles.createPlan}>
                        <p>создать план</p>
                    </div>
                </div>
            </Header>
        </>
    )
}