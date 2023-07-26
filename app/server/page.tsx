import ExampleClientComponent from '../components/example-client-component';
import ExampleServerComponent from '../components/example-server-component';

// Pages in Next.js are Server Components by default
export default function Page() {
	// 推荐模式：将服务器组件作为 Props 传递给客户端组件
	return (
		<ExampleClientComponent>
			<ExampleServerComponent />
		</ExampleClientComponent>
	);
}
