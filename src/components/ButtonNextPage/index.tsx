/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/ban-types */
import './styles.css'

type Props = {
    onNextPage: Function;
}

export default function ButtonNextPage({ onNextPage }: Props) {
    return (
        <div
            className="dsc-btn-next-page"
            onClick={() => onNextPage()
            }>Carregar mais</div>
    )
}
