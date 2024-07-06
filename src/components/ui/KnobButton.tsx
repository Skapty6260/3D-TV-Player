import styles from './KnobButton.module.scss'

interface IProps {
	label: string
	active?: boolean
	notAllowed?: boolean
}

export const KnobButton = (props: IProps) => {
	return (
		<div
			style={{
				background: props.active ? 'blue' : 'red',
			}}
			className={styles.toggle}
		>
			<input type='checkbox' checked />
			<span
				style={{ background: props.active ? 'white' : undefined }}
				className={styles.toggleButton}
			></span>
			<span className={styles.toggleLabel}>{props.label}</span>
		</div>
	)
}
