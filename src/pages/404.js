import SC from '@emotion/styled';
import Link from 'next/link';
import {Icon} from '../components/icon';
import {Page} from '../components';
import {maxDevice} from '../styles';

const Header = SC.div`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 72px;
  color: #000000;
  @media ${maxDevice.tablet} {
    font-size: 40px;
    line-height: 48px;
  }
  @media ${maxDevice.mobileL} {
    font-size: 30px;
    line-height: 36px;
  }
`;
const Text = SC.div`
  width: 560px;
  margin-top: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #777777;
  @media ${maxDevice.tablet} {
    width: 370px;
    margin-top: 30px;
    font-size: 20px;
    line-height: 28px;
  }
  @media ${maxDevice.mobileL} {
    width: auto;
    margin-top: 30px;
    font-size: 16px;
    line-height: 20px;
  }
`;

const NotFound = SC(Icon)`
  @media ${maxDevice.mobileL} {
    width: 90%;
  }
`;
const Img = SC.div`
  display: flex;
  justify-content: flex-end;
`;

const ULink = SC.a`
  color: #38B662;
`;

function NotFoundPage() {
  return (
    <Page>
      <div>
        <Header>{`Этой страницы \nне существует`}</Header>
        <Text>
          Вы перешли по неверной ссылке, либо эта страница была удалена.&nbsp;
          <Link rel="canonical" href="/" passHref>
            <ULink>Начните с главной страницы</ULink>
          </Link>
          .
        </Text>
      </div>
      <Img>
        <NotFound name="notFound" size="260" />
      </Img>
    </Page>
  );
}

export default NotFoundPage;
