import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => { 
  return (
    <Link href='/'>
      <Image src={'/images/logo/logo.svg'} width={'118'} height={'33'} alt={'Volde'} fetchpriority="high" />
    </Link>
  )
}
