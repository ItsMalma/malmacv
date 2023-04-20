export interface ContentSectionListProps {
  items: string[];
}

export function ContentSectionList(props: ContentSectionListProps) {
  return (
    <ul className="list-disc list-inside">
      {props.items.map(item => {
        return (
          <li key={item} className="font-oswald font-semibold text-slate-950">{item}</li>
        )
      })}
    </ul>
  )
}