import Form from './form';
import { Suspense } from 'react'

export default function Page() {
	return (
		<Suspense>
			<Form />
		</Suspense>
	);
}
