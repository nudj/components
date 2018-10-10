import React from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import Button from '../../../../lib/components/button'
import Link from '../../../../lib/components/link'
import IconButton from '../../../../lib/components/icon-button'
import IconLink from '../../../../lib/components/icon-link'
import WhatsappButton from '../../../../lib/components/whatsapp-button'
import FacebookButton from '../../../../lib/components/facebook-button'
import MessengerButton from '../../../../lib/components/messenger-button'
import TwitterButton from '../../../../lib/components/twitter-button'
import EmailButton from '../../../../lib/components/email-button'
import LinkedinButton from '../../../../lib/components/linkedin-button'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'
import style from './style.css'
import { css } from '../../../../lib/css'

const ButtonDocumentation = () => (
  <Page>
    <h3>Button</h3>
    <p>
      Use buttons as a way to inform the user they are able to perform an
      action.
    </p>
    <p>
      To help the user with wayfinding, we use{' '}
      <a
        href='https://www.viget.com/articles/visual-loudness'
        target='_blank'
      >
        visual loudness
      </a>{' '}
      to help the user identify what the most important actions are on the
      page.
    </p>
    <ReactCodeSpecimen
      code={dedent`
        <Button volume='scream'>scream</Button>
        <Button volume='shout'>shout</Button>
        <Button volume='cheer'>cheer</Button>
        <Button>murmur</Button>
      `}
    >
      <div className={css(style.wrapper)}>
        <Button style={style.button} volume='scream'>
          scream
        </Button>
        <Button style={style.button} volume='shout'>
          shout
        </Button>
        <Button style={style.button} volume='cheer'>
          cheer
        </Button>
        <Button style={style.button}>murmur</Button>
      </div>
    </ReactCodeSpecimen>
    <h4>Reduced affordance</h4>
    <p>
      In some cases, it may be appropriate to reduce a button affordance even
      further than normal. Although this won&#39;t be a common occurance, you
      can do this by providing the `subtle` prop.
    </p>
    <ReactCodeSpecimen
      code={dedent`
        <Button subtle volume='scream'>scream</Button>
        <Button subtle volume='shout'>shout</Button>
        <Button subtle volume='cheer'>cheer</Button>
        <Button subtle>murmur</Button>
      `}
    >
      <div className={css(style.wrapper)}>
        <Button subtle style={style.button} volume='scream'>
          scream
        </Button>
        <Button subtle style={style.button} volume='shout'>
          shout
        </Button>
        <Button subtle style={style.button} volume='cheer'>
          cheer
        </Button>
        <Button subtle style={style.button}>
          murmur
        </Button>
      </div>
    </ReactCodeSpecimen>
    <h3>Link</h3>
    <p>
      By default, links are rendered to look the same as a button. This is
      useful where the desired action can be achieved through navigation,
      e.g., progressing to the next stage within a wizard-style flow, or
      opening a mailto link.
    </p>
    <ReactCodeSpecimen
      code={dedent`
        <Link volume='scream'>scream</Link>
        <Link volume='shout'>shout</Link>
        <Link volume='cheer'>cheer</Link>
        <Link>murmur</Link>
      `}
    >
      <div className={css(style.wrapper)}>
        <Link href='#' style={style.button} volume='scream'>
          scream
        </Link>
        <Link href='#' style={style.button} volume='shout'>
          shout
        </Link>
        <Link href='#' style={style.button} volume='cheer'>
          cheer
        </Link>
        <Link href='#' style={style.button}>
          murmur
        </Link>
      </div>
    </ReactCodeSpecimen>
    <h4>Regular affordance</h4>
    <p>
      Typically, you will use links with the `subtle` property, used the same
      way as the button component
    </p>
    <ReactCodeSpecimen
      code={dedent`
        <Link subtle volume='scream'>scream</Link>
        <Link subtle volume='shout'>shout</Link>
        <Link subtle volume='cheer'>cheer</Link>
        <Link subtle>murmur</Link>
      `}
    >
      <div className={css(style.wrapper)}>
        <Link subtle href='#' style={style.button} volume='scream'>
          scream
        </Link>
        <Link subtle href='#' style={style.button} volume='shout'>
          shout
        </Link>
        <Link subtle href='#' style={style.button} volume='cheer'>
          cheer
        </Link>
        <Link subtle href='#' style={style.button}>
          murmur
        </Link>
      </div>
    </ReactCodeSpecimen>
    <h4>External Links</h4>
    <p>
      You can indicate to the user that a link is to an external website by including the `external` prop. Note this only works when using `subtle`
    </p>
    <ReactCodeSpecimen
      code={dedent`
        <Link
          external
          subtle
          href='#'
          volume='cheer'
        >
          External link
        </Link>
      `}
    >
      <div className={css(style.wrapper)}>
        <Link
          external
          subtle
          href='#'
          style={style.button}
          volume='cheer'
        >
          External link
        </Link>
      </div>
    </ReactCodeSpecimen>
    <h4>Icon only buttons</h4>
    <p>
      Icon buttons and links can be used where enough context is provided to the actions by the surrounding UI.
      They can be used where space is at a premium or there are a high number of related actions.
    </p>
    <ReactCodeSpecimen
      code={dedent`
        <IconButton
          volume='scream'
          iconName='email'
        >
          Scream about email
        </IconButton>
        <IconButton
          volume='shout'
          iconName='email'
        >
          Shout about email
        </IconButton>
        <IconButton
          volume='cheer'
          iconName='email'
        >
          Cheer about email
        </IconButton>
        <IconButton
          iconName='email'
        >
          Murmur about email
        </IconButton>
      `}
    >
      <div className={css(style.wrapper)}>
        <IconButton
          style={style.button}
          volume='scream'
          iconName='email'
        >
          Scream about email
        </IconButton>
        <IconButton
          style={style.button}
          volume='shout'
          iconName='email'
        >
          Shout about email
        </IconButton>
        <IconButton
          style={style.button}
          volume='cheer'
          iconName='email'
        >
          Cheer about email
        </IconButton>
        <IconButton
          style={style.button}
          iconName='email'
        >
          Murmur about email
        </IconButton>
      </div>
    </ReactCodeSpecimen>
    <ReactCodeSpecimen
      code={dedent`
        <IconLink
          href='#'
          volume='scream'
          iconName='email'
        >
          Scream about email
        </IconLink>
        <IconLink
          href='#'
          volume='shout'
          iconName='email'
        >
          Shout about email
        </IconLink>
        <IconLink
          href='#'
          volume='cheer'
          iconName='email'
        >
          Cheer about email
        </IconLink>
        <IconLink
          href='#'
          iconName='email'
        >
          Murmur about email
        </IconLink>
      `}
    >
      <div className={css(style.wrapper)}>
        <IconLink
          href='#'
          style={style.button}
          volume='scream'
          iconName='email'
        >
          Scream about email
        </IconLink>
        <IconLink
          href='#'
          style={style.button}
          volume='shout'
          iconName='email'
        >
          Shout about email
        </IconLink>
        <IconLink
          href='#'
          style={style.button}
          volume='cheer'
          iconName='email'
        >
          Cheer about email
        </IconLink>
        <IconLink
          href='#'
          style={style.button}
          iconName='email'
        >
          Murmur about email
        </IconLink>
      </div>
    </ReactCodeSpecimen>
    <h4>Share buttons</h4>
    <p>
      Use these buttons to allow the user to share content. They're mostly functional
      in that they provide a simple component-based abstraction on top of their
      platform's share APIs.
    </p>
    <ReactCodeSpecimen
      code={dedent`
        <WhatsappButton text='Hiya mate, how about this job?' />

        <FacebookButton url='https://nudj.co/companies/fundstack/jobs/software-engineer' />

        <MessengerButton
          link='https://nudj.co/companies/fundstack/jobs/software-engineer'
          appId='1945143509142278'
          redirectUri='https://nudj.co'
        />

        <TwitterButton
          text='Hiya mate, how about this job?'
          url='https://nudj.co/companies/fundstack/jobs/software-engineer'
          via='nudj'
        />

        <EmailButton
          to='hello@nudj.co'
          subject='Hiya mate, how about this job?'
          body='Hiya mate, how about this job?'
        />

        <EmailButton
          gmail
          to='hello@nudj.co'
          subject='Hiya mate, how about this job?'
          body='Hiya mate, how about this job?'
        />
      `}
    >
      <div className={css(style.wrapper)}>
        <WhatsappButton
          style={style.button}
          text='Hiya mate, how about this job?'
        />
        <FacebookButton
          style={style.button}
          url='https://nudj.co/companies/fundstack/jobs/software-engineer'
        />
        <MessengerButton
          style={style.button}
          link='https://nudj.co/companies/fundstack/jobs/software-engineer'
          appId='1945143509142278'
          redirectUri={window.location.href}
        />
        <TwitterButton
          style={style.button}
          text='Hiya mate, how about this job?'
          url='https://nudj.co/companies/fundstack/jobs/software-engineer'
          via='nudj'
        />
        <LinkedinButton
          style={style.button}
          url='https://nudj.co'
          title='Supercharge your referral scheme'
          summary='nudj makes it effortless for you and your team to ask for, track, and reward referrals.'
        />
        <EmailButton
          style={style.button}
          to=''
          subject='Hiya mate, how about this job?'
          body='Hiya mate, how about this job?'
        />
        <EmailButton
          gmail
          style={style.button}
          to=''
          subject='Hiya mate, how about this job?'
          body='Hiya mate, how about this job?'
        />
      </div>
    </ReactCodeSpecimen>
  </Page>
)

export default ButtonDocumentation
