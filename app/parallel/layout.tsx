export default function Layout(props: any) {
	return (
		<main>
			<hr />
			{props.team}
			{props.analytics}
		</main>
	);
}
