import { useState } from 'react';

import ChatWarp from '../../components/ChatWarp';
import ChatContent from '../../components/ChatContent';

import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { RiImageAddLine } from 'react-icons/ri';
import { FiSend } from 'react-icons/fi';

import { Container, ModalContainer, ModalHeader, ModalBody, ModalFooter } from './styles';

function Chat() {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  const iconsOptions = { size: '1.5rem', color: '#7d1d39' };

  const ChatModal = () => {
    return (
      <ModalContainer>
        <ModalHeader>
          <div className="back_button">
            <button>
              <BiArrowBack size={iconsOptions.size} color={iconsOptions.color} />
            </button>
          </div>
          <div className="content_area">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADjCAMAAADdXVr2AAAAkFBMVEUAAAD////+/v7t7e3s7Oz39/f6+vr09PT9/f3x8fHDw8PNzc3a2tqamprp6enk5OSTk5PT09OIiIi2traCgoKtra1gYGDLy8tPT08xMTEoKChVVVVbW1s+Pj6+vr7d3d2hoaFwcHCMjIxJSUkrKytlZWUXFxc7Ozt7e3shISEODg5ra2t0dHSfn58aGhoSEhKqICgTAAAXEElEQVR4nNVd6WLjqg4OJhiTZk/TdMsyzbRJO5057/92F7wggbENXtpe/XIhtfXZIAlJiFEkiQgqiRN5mYzl1ThRjVw1CtVI0sZYXhIGjU396qZjphpj1U/TRtRPXf0pJww4iczW7KdjeH7KdORiOr3BSMMbl+CNLfZT9qCxqT9jX90f8VTdD/AwJ1FkvCl8qwamvwYekRQJLomkxBnjaSMR4v8anqBCSEwRnR62y9vr6/P9+Xze7/fnp7vrerk97KbzHPOA8LIXOZaUPipRV+Mkfc/qSqT9aWOsrpi6oqS+P2tk85vt+u5hVENv99ftSqQfcjx2chJBK8vehCLrp5GTaXWDkVDEYklMXXF1FXOzUUBj1i8q+1WjFADi5u+fxzpgBj29HOQb49zBiYD7262Vz8/71U9HFISe/JjjfFyNDaE2hkY1GEg2GJz98hWz3fLeG5mmh9vNkXOaWJzQlL+0lUPr2GSaOplWP83hlaaNx1i3haKca5wvts/h0Arav9wk2Qg35FNZFmimI2ZNW2Ca9gyPsdXy0h5bRm/XGznBaH/wXFKD1k/lbNZb/fNZrRQJoPVKjtJcPlB/UWfLH/XTkdJIUhcpgktnI6tuJOzQYrpV0+NsnsTwJD/+7EZ13YtiWNz2iS2jPzdcaYuuiqGzWic3dw2cflyer+vZ9jDZ3axuJpPNZivV/Ov5X8O/XbaC0++1WkQ8qZMm95+nyZErlSaVUmagpBopV/vTyWldJ2g/ZvI79QFvXPFLp57RKwbBt+9VrJ1vt1OJKtFGl8OkFilmOlk+VSJcyiFZBa+e6QxeokgpfMrVVayeSeO0UV2mjQk0MnUpovSnfPPbzdN+eSO5Sm/K9E2zf8r+P72pyPvl9GJidar6jDP5WoV5K6qZLvHHEX/ycuSUGh6KQfDd3snOr43IbMjIJZ9scxL1zw+3bjvuJIjrVl6KoaVa5yvngPo1ydivnMDOucKzwSqNnpsXl8B5nKgR+nVWi5i7VMHzhvK4QT5Vw4tyQTx13npBvgweIVvHG/67UIqqSfw2wEtHXLRx2AjLTECFwmsx9+ZlKfC0y+dGzdxqmnvAScxXvxwjlNHwuWdJzgRJJi05IyQ5pTIoPflzxbghWQ3JWIi7KslpSNa8UTI7Kz3mGhNDclKT6ZJkV5IzUO9Fi9LAuc6zcVHhazEXhdX9aNGWzYBxCeDbKpda/novyGohZFMCp8ZAjSvJXjVV9pd8LZTzEsB1JIYzykjyaT3u9aispsEcgXy+tB54mfLBXEkLywTb73JXlzXV0VLNlk9N/TYnhNpCZisljPXTmhWD/3qqNDC3JPZbJHbol2vJnWW0X6U56L3e81+tW+r2kze8eOcQ8FIM5icW4mQ++cxE30YZiU2J+bhjsTWtvCZwo1p3TFDKqaVpV7xfq4UsTGv3VgiHp2woePJDWxNjw4PgFUu5Kj/nyrj5+4Q7VJrtB3UqT9QfVSpXh5+TUNOEnzE/P6ePlzo+GLf+w5mPl7jatV3Tb/ujedGaEFMJSgFT+XwGXmofqWCaYae4af3Vo2JAriQy/c94ycoE7cGVZL62dzmtvyu+FxsS5lnUrlA8rRZiGA5Pc/F94UuLl3sp3zrDe8F3fIko/T54cqQaUuDsiJiHGWWJ8b62IfG9vudeFtO9Mb9f09yzOLOtFgPdhOOp7MVZD1aLxbnA7rmnhHawWsgJo5NCpT4ANphaN2RBfDbkS3urxbAV/h0F7QwP53S0hCc/Ohagn7w1vB26zbtgtD28dHBx5TzILpVMbwtP4sNRjTVr50pKjugmv1lTfK9q7lHlWpluln/O+WrxY393PU3mzF8+laQGf0WsnXjN3Ks0jRKB0c2523JzhvLxnQiZzpyxv8vLTsTcy7Irt5I/6E474rTn1E9HbmtYjXDkY39fiLK122gNyw/Hpy91CRKpU7vWLo/cJj4h+PstRM60wVStWjfej/r/8LQdITZnG5BNv0+sVdoOIWhIPAZbLeRUejuh8GqiYwYt40yABMGTHweNrmcWaLXgBd6qVVbSoSn6CjRrlZVE0dtbsgqrxemFiSl6+IaEphJwRsre3jp6n0TMz9+ELuMFusMkdv7U7UpiaGm85H6JH6jf5UFvoM8kRDHkP8X2JwswyhB3r6xKbVeqdUIbJYrjAyr/rJ9a1xEivM5+8rZaCNLnD9VO7yp4lmPGm04sFF5ErvDvW1YNj6CbEoJs8jmCN7bguV1JruCfH115I7wxhqdYReNkJRzwhBU7ShLsr50QM1Sf5xfYsSsU0CJ2VCCA7qTp4YiS6dib+SjVSObw3xemmRLFT8uKQSBDes1D01VtX3YYPQWnq8aI25lDMdhqnQqwoi4iONl43QWdxGcvSyrVumYavU8jAO+2WjgaXMdQeCRYIdiU2h9B8JCkuG+ER6bwKLnSCINXDm6G05WHwkNyfttklBFQ6Pe8yuiqmntHB7vBtOWhqeJoyMTMmnum5OTI0bYgZtTfDtXbWQF8/tYHvNGUgOSMhMkfakVMQwDwSkCcp5LT1HtIrsyIW69V6r341cVsOD36672caWScHeusFn7Sv7vw0Fzq1urcpivxtVryABgD6flcBw8pyRsRBo+wvtCpZ4fBEzH6X1KZKs5Ba/3ioanidtJEB3oQ1GvFAKIORPbeXDGgRRJe5VHPrIDiirW0o920jXyXfvlVAtJFrvzQek/ZpcWHgY+3bHhbkdVPea+Z8B9J4B4iZEle+DhdF9hGGQPP34eVP9mo1sWkT3RKbAfuAGPg2d0Ip9WCgkFbEoXB49XZ0K1Ifr4weAImx55jq6VQaXSsf/BOLJeh04+J9VCvM0/Rpt7Paeph5b9n4Lg8cPBzai8wA9tmS3y80Kg/vrpY7EIX4vZSV26442AR3ifgpQap8VF0vzdNZVsx0KhvdEr3hSgGRZB8dqQlVxIK625Dd4CJg4vBbnTL/NU6tdY6n3p/NcADpy8JhcfLqcGd6V8cCg/lTSxseGgxs/SFp/uFi7+uNA2Fx0E5zXgBrxjGYJWK0P17fSu9nMXQuSe43kD4UCxV8+Us0gp/eGNU317OdnCOVdMT1y/Wd4MbWJ4r02oRsJrZiYqof6VaJz3r9Iw+gtS6GsEEFg6fxLBawOpQbukweCT6cPLXlaYiEF6EZlhMEDwOwRY1KwPhURdz3WkTDg90w4QgVxI76fYF9Z3Kuv/GwVsPtBT+K4ZC/mjtdoerDoCr/pl4GkHQz3rzQph0JXFo1QFkWM65rjqAnBBbDxPWqjrAX1zMdacnAnqv3sTX2bgCRudWaLWO5OaceI/1wmrhvdvTGV0QPB+1rvjjehj+4RoerAWfWQt4PTkAbXpvAU/81f/OC1cSBdG35WAr+FotvEOViDp6C7Va1BWogElRdYCBUTX3dN3gy2QQrS71urGfpHbDCVwRbZitE5ZXHdCyYd+q6sBA8P4bt6g6kGh32IXkRhloi2Xdrt5Ktd5UdaAl/QtW64o/GImqf2T4l1et4A2w2lP0m7eBB3JkIjJ44CMs7cmurTqQ95OB9N6eNcAbO+BxEHRrnlYdgPXMEzGqDqRWgr03NbUSItxPTsPAe2ZF0kKWQOBXdQB2bJ5Z6koCB7O08lqUoxE9xGRdtG6hGCRT4JNkqSsJVrKHIpYepNZF707OjE4t1LpkmusbrIhU64i7RfX+vTpX0tzFXHfatYMHemCbwtMG5wNvB4+7a2N0pXlLeHpNe5XwxkIrQuVlaVMKahib+o20m3vgcdmrqgOglU+kVHWAlqoOwK5+3U8G8OLKBSnTnESq3GC5XktF1QGYbCpVnOhsgR2przrgUOtpf59xZ6CTaHIlOfUejqBPJTzgbV6G5xkA6zV2mdOiEZ7LalH7JnSa0kHCA/d03BreqX907yTYEZgzBXbLScLTNugFpEZoActe0pFMeske2qJOGUi6Kx/Fp+KPu8RjPeVeDw6waFih24dVmUsAkVzOar1w5ePWNQJ79wU+8PY1AvV43Et4Omg7g2SZwACYhN9X+cOCMkdXqwqP4Mz9j4zYPdyxA7y+fZ3zkKwkCx4Y0fEI0ul2grauroq0Zy+05u2rqxIIhdMR0/GPKRfNtXFZhZe4j0xVRGNuVx2o81JbTBN9m+MIruftFYOSOZ0LqyJaksCsJINpCGPejMBocW5r9U42Fj0Kzw8wMFqodZQANhlBXLypQFxDLjXrLyXwAJy0gqfNls0IiZlu8CjrJ9d4NLqPOsLTRsZ2pO3r/+JOc69H3X5kpNvc06p8O9I68D0CzttUNiaip0jYwXuDW4XVApmzG4D3GMFgC1brWX8veYG3nctuw74wBO83KubREp4Y++2WraMzGQbeY3d4VHReGb2rbWtDwPuXdJ17ampM3Vx701hPqH7mno73fcRg73hVFXBWcUo6ic+PORSZqq06UPl89f+xjulsG/SeZzYu6u/is34c+1YdMEz84qiXwu7Geq83q6XoF8e28uXMif+2/Dq1rgX4pjebE/rFvJ3j7JcusN0VHrI5YcWw6Gi16H7K2uxS3DrlVwurhXLtCbwZJbDei/1SBZr7GdmFDtCnRdzwJP/nQ2LgFK3WJ6K7YtD7i2nQFuGPTXmItFcMib4v7cnXUu7nK/90l2Uq1ZwTvIVaN30t4CnjfcKTd3LXVS99udk8BuneBzzsKQM/56cDXsjuS7tfDpPJf25I+MslseDV4tmC505lsODpgJXyc56KP55Si8FZMdsK1burDqB+2Sj1+7LiPAOT3m4nkidHfoJP1YFSI8OpDHcExRge+lIMqnG+DJCd7+sjF70dkgUxhluOI0SM9KLWKRfh59o8HXi6L6sHtQ5Gy8mI7y36gEf5fNYqdfxhk36S7vBg9/bBiM5OeoAXzdtXjfi36QUe5Dyq6CxU/Jp1n3tJt6IRD5NYdJ17aE/MmI4EaIY7JmiaFVAK1aeNDVUHIik2N519gU9yhqT5CQUnSEiareXGjGmI5uyl/YLyWt5FvVpv0HvxtEWJpDK91PlanFUHrLwWvVa/WllJ01ZJV1l/fzuJ3lcp+22tFgg1pllJKKds0x4eWfQYQnkRoj08SOhUOWU4I/CWt14x9Bu+vBx56xUDZKeytOpApEfVhbQ7ayDmf5xcdqDa0nZ1TMXaVX5OsqoDGK+nYjCrDggv4zKMXrIPF0FVBD/FwHT+3pqnqeJo29ukVS71MPmcz6JVqjjeyJBtcIMMyGsLeD2HnYH2quZpKLwYhECaCa9kuh6ub1Bd1dvPeRoIndQQRxHs50y0C/eiuFZVByKYfMck0EtN/jo564mOzLvqQOEl1//7osq7qp3PaA/RMnQPUefCZPU0F2GKAUX4J7rqAOwAu4TtABsaXVoJLkStc3DQwQY3tH9vGgCv/1ykMv23cG1VroQntI8A7d9DCazLEHiDbMe36GHu2GheBQ8V3dmIYv+enFva1n/wn3vJwslP33Rm1HvuoaT1BYWqA2jn807vN2683TDb1Ut09bdaIJvsDlcdQPvWPz33rQ+2ba9MngVWElyCcYK35aOqA6O5J7xBCkW4KasK7AEPUBhVB3DNiK1XzYiBDE03/aNe8Agag8QoYInWtKoYSPNUjr9o4mV0x7zmHig9XfEjt7dQ1y5qNoLiHkvm+dCGeFQdAOPrgeU/LQpYImf1M2kyYZMhiiPVkyCN2bjoKMlZkVjsqpW0aJRUonv2USDdNR+ry8ELOS98Ua5KV7+a4A21W7aOdo3wQDqmoTy7gCUIi3mDGh27nj8w/cMhaaeZAR6Royh+CmdfRjB0P0ltqL7PUpz+NEtqXUsJqPR7oveuQGVjpBuyHJAqxTDUXtkmEnWKAa0VVI3AwjJ2V3h8JTVqnQ1U4aOJ1nVqHVX1NSo8IlcNqqY2ra7P2TnprzUpWVdZwBIkh6M+Z6bSQLXvSaUrqX+XrS+9kMqQDqrqe8mPP8zgoag/2vI9OhB7V39+loD4mlWek3jkTlVIMFMHnvdbBSyNysZvtEoxDO5eqaaZqFIMIA7OmunyWShog/26quy2//k7vdMjd6t1jg5lsOtSY3hI/oxWsQsePt7h6+kgnPCQUqitKo5rwu8TF7zk2wSLolfugodqppdqwpvDGFfvOLnm3iClOP1p4TIzUPr2lRBz7iVmVgD2oExVY2RUHRimwIA/beDomYLpKELhtxhSCVIha+g9dYmUttQgpaoD3zo21dQq6T18GMoGKevms1BemGW1EFJ+4tdSutQxJDkams1noRgn2YwmwoL3TdY00EGY8BgyRVwn2ZQc0Pgcoo8FN6fy6YvRlOiWm6IOHwP911zmpCuG8tIJnyV0nxih+mSgenn+9ECM9R72G1xiE0m63stX66neG+dZAUgUrdNjv4up/M1qQZE6Q60YTZERxFmJ1MWQ+r+yb9h8gttoy2Gsf9dCFpNKW9QH1OEqTXUnuBnwzKjkSgC84eN5jbQEeCRGDrva8/esrAB8euLHURSDk3c84asPSh0J+foTp+ixknM2hefOCsBf/UGnCvR10lAXetAVc43ahDtScq2nXuqSYsjc9XiW3WvF0GdlgbY0Lw45xftcKk8utdV6EUs6oX9+5rmn/muBuOmYyQIjAFd97mwFPLMs5S+eTeWvhuKiSQrPyFr47UqlaoCHz3xWBzhIeN/oZgHaiFJ9mIUrO6T21GBJRi30X1zC+wFqT5peklkT3Q0Bpu2553TXl89bH/0i/OvDXi5S+fqGO6v2vHWnWs81pOFXeeZ8qNy/IHqxsral2WjtW2+0WoqsawPP+ScYLcoXb+x8TI91aQfPKh+3/8JkiGq6GpWG7wSthVc999Jh/CMQVdNTQsflqgNo7lWnRmb5mj8a3z23SxEgyzJ1wpeiEYYKka/gGwLNvnSm1FV1IF8X1Kp1yJX+sd/vXogqphutFpTp/o1Bkzp6FjVMN1stYAD8CIVg05/UTeKqlYStFp9d/d/tm3bRldRUPdCXxsmlDsWQxxh+hLWJacZqytF4GmUQISKLfkscdqUNrykm5G21oA1s8RDlfdvSirtzqZtcSdVVB8zF/7fSmQmT6Rp4lRv48wMCdGOU/BABekuIQKkMlUynJ3b7KIbClfQjJuCG0YYieh6uJGdWEkm+JZsM02WKvOYeaj0EXjTcbjZPWhMrANYrvIhEi2+UoG8r0rR/r41RhkP1RnLI19Jt7FfAEs+9dLWbb+BXwPMN/JLyqgKK8qoDkniUkPm3RPkeJ0ofZPxRH6ZVq69ax4vCb5mBy3RcelQdaGW1WKni8y/W8c/z5lTx/uCNKZ9+2RYiNS6t89/94TW4kio3uAm+G+aElzKdMlHhX8ASrRi8Cro5G+N403ehexfNeNSqFEK23sulRvphUv9LJmNTFTIeF1lJ2dtC+QVpv+Dboc20JUsLI2YfRmcFZGWVNNORk+lgoywqbcsX8WTAkObHLAUSWuGxg9XiqDqwGigkfdkKTqOoGzxLpYVXHZC0GEBN/Lnhac0I4M+7uir2c/rXnq2ujSsXWOGVyero998xQfUPAqoO2F7qtoqh1D+f9SVH1yvOaZfKxsGuJNdYtys8MrZadpYzb9cbyR6lWIGH1qXuwWpxwBNUcL7YdrC398ubJPskPwGeo5/KwRHvli0m4sPt5si56KE+pwnPZxj7zD3ULznZzV79Kww9LXdZzeZ+isfiuedcGXpVHagtYKku5zfb9V2tvHm7v25XQnm+aMU7bHMeQ1tXklOtV/aronaqKiWdHrbL2+vr8/35fN7v9+enu+vLcnvYTec8+9ixNcI61qXu1Wqp7KcZT+rtCmXnkuybS1OXZW9fGPLp/xOerT0q+weGR0u/pBb7qVEGjU39NJOkpiVl9SNLC+BRXPIe+CsZZfVMp63/A72lJhbbL84MAAAAAElFTkSuQmCC"
              alt="Icone de Perfil"
            />
            <strong>Name</strong>
          </div>
          <div className="options_button">
            <button>
              <AiOutlineInfoCircle size={iconsOptions.size} color={iconsOptions.color} />
            </button>
          </div>
        </ModalHeader>
        <ModalBody>
          <ChatContent />
        </ModalBody>
        <ModalFooter>
          <textarea placeholder="Nova Mensagem" />
          <button type="submit">
            <FiSend size={iconsOptions.size} color={iconsOptions.color} />
          </button>
          <span>
            <RiImageAddLine size={iconsOptions.size} color={iconsOptions.color} />
          </span>
        </ModalFooter>
      </ModalContainer>
    );
  };

  return (
    <>
      <Container>
        <ChatWarp />
        <ChatWarp />
        <ChatWarp />
        <ChatWarp />
        <ChatWarp />
      </Container>
      {/* <ChatModal /> */}
    </>
  );
}

export default Chat;
