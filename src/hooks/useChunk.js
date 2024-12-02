export default function useChunk() {
    const getChunk = (startIndex, endIndex , array)=>{
        return(array.slice(startIndex,endIndex))
    }
  return getChunk;
}
