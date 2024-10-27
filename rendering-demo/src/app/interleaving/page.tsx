import { ClientComponentOne } from '@/components/client-component-one';
import { ServerComponentOne } from '@/components/server-component-one';
// import { ServerComponentOne } from '../../components/server-component-one';
export default function InterLeavingPage () {
    return (
<>
 <div>Interleaving page</div>
 {/* <ServerComponentOne /> */}
 <ClientComponentOne>
    <ServerComponentOne />
 </ClientComponentOne>
</>

    )
}