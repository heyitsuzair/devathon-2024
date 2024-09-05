import {
  InputFile,
  InputPlain,
  SelectOverlay,
  SelectPlain,
  TextareaPlain,
} from "@/components";
import getNameByPlaceholder from "./getNameByPlaceholder";
import handleChangeFile from "./handleChangeFile";

export default (
  fields,
  onChange,
  onBlur,
  errors = [],
  touched = [],
  values,
  gridClasses = "gap-4 mt-5",
  setFieldValue = null,
  setFieldTouched = null
) => {
  return (
    <div className={`grid grid-cols-12 ${gridClasses}`}>
      {fields.map((field) => {
        const id = field.name || getNameByPlaceholder(field.placeholder);
        if (field.options && !field.invisible) {
          return (
            <div className={field.span || "col-span-12 md:col-span-6"}>
              <SelectPlain
                label={field?.placeholder}
                placeholder={field?.placeholder}
                name={id}
                id={id}
                type={field?.type}
                onChange={field?.onChange ? (e) => field.onChange(e) : onChange}
                onBlur={onBlur}
                value={values?.[id]}
                error={touched?.[id] && errors?.[id]}
                errorText={errors?.[id]}
                options={field.options}
                isRequired={field?.isRequired}
              />
            </div>
          );
        } else if (field.type === "textarea" && !field.invisible) {
          return (
            <div className={field.span || "col-span-12 md:col-span-6"}>
              <TextareaPlain
                label={field?.placeholder}
                placeholder={field?.placeholder}
                name={id}
                id={id}
                onChange={field?.onChange ? (e) => field.onChange(e) : onChange}
                onBlur={onBlur}
                value={values?.[id]}
                error={touched?.[id] && errors?.[id]}
                errorText={errors?.[id]}
                isRequired={field?.isRequired}
              />
            </div>
          );
        } else if (field.type === "file" && !field.invisible) {
          return (
            <div className={field.span || "col-span-12 md:col-span-6"}>
              <InputFile
                label={field?.placeholder}
                name={id}
                id={id}
                onChange={
                  field?.onChange
                    ? (e) => field.onChange(e)
                    : (e) => handleChangeFile(setFieldValue, setFieldTouched, e)
                }
                onBlur={onBlur}
                value={values?.[id]}
                error={touched?.[id] && errors?.[id]}
                errorText={errors?.[id]}
                isRequired={field?.isRequired}
                accept={field.accept}
              />
            </div>
          );
        } else if (
          (!field.type ||
            field.type === "number" ||
            field.type === "password") &&
          !field.invisible
        ) {
          return (
            <div className={field.span || "col-span-12 md:col-span-6"}>
              <InputPlain
                label={field?.placeholder}
                placeholder={field?.placeholder}
                name={id}
                id={id}
                type={field?.type}
                onChange={field?.onChange ? (e) => field.onChange(e) : onChange}
                onBlur={onBlur}
                value={values?.[id]}
                error={touched?.[id] && errors?.[id]}
                errorText={errors?.[id]}
                isRequired={field?.isRequired}
              />
            </div>
          );
        }
      })}
    </div>
  );
};
