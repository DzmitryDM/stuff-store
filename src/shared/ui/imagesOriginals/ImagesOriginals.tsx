import styles from './ImagesOriginals.module.scss'
import { useAppSelector } from "../../hooks-redux/hooksRedux";
import { selectImages } from "../../model/header-slice/headerSlice";


export function ImagesOriginals() {
  const image =  useAppSelector(selectImages)
console.log(image);

  
  return (
		<div className={styles.image}>
			<img  src={image} alt='originalsImg' />
		</div>
	) 
}
