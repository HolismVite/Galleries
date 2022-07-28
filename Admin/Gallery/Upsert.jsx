import {
    DialogForm,
    LongText,
    Title,
} from 'Form'

const inputs = <>
    <Title />
    <LongText
        column='Description'
        placeholder='Description'
    />
</>

const UpsertGallery = () => {
    return <DialogForm
        entityType='Gallery'
        inputs={inputs}
    />
}

export default UpsertGallery