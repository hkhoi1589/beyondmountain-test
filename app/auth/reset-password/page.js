import Form from './form';
import { Suspense } from 'react'

export default async function Page() {
	return (
		<Suspense>
			<Form />
		</Suspense>
	);
}
