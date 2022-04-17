export const getCategoriesList = async () => {
    const data = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    const res = await data.json()
    return res
}