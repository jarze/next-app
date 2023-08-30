export default function Tab(props: any) {
	console.log(props);
	return <div>二级Tab选项 {props.params?.type}</div>;
}
