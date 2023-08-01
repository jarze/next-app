export default function Layout(props: any) {
	return (
		<main>
			{props.children || '--'}
			<hr />
			{props.team}
			{props.analytics}
		</main>
	);
}
