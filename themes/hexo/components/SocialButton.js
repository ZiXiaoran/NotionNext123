import { siteConfig } from '@/lib/config'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return <div className='w-full justify-center flex-wrap flex'>
    <div className='space-x-3 text-xl text-gray-600 dark:text-gray-300 '>
      {siteConfig('CONTACT_LINKEDIN') && <a target='_blank' rel='noreferrer' href={siteConfig('CONTACT_LINKEDIN')} title={'linkIn'} >
        <i className='transform hover:scale-125 duration-150 fab fa-linkedin dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {siteConfig('CONTACT_BILIBILI') && <a target='_blank' rel='noreferrer' title={'bilibili'} href={siteConfig('CONTACT_BILIBILI')} >
        <i className='transform hover:scale-125 duration-150 fab fa-bilibili dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
    </div>
  </div>
}
export default SocialButton
