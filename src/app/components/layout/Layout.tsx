import styles from './layout.module.css'

function Layout() {
	return (
		<div className={styles.pages}>
		<header className= {styles.header}>
			header
		</header>
		<main className= {styles.main}>
			lorem99
		</main>
		<footer className= {styles.footer}>
			footer
		</footer>
		</div>
	);
}

export default Layout;