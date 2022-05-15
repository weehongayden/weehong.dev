import { FC } from "react";
import slugify from "slugify";

interface Props {
  tags: Array<string>;
}

const TagList: FC<Props> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-1 my-2">
      {tags.map((tag: string) => {
        const tagSlug = slugify(tag, {
          lower: true,
          strict: true,
        });

        return (
          <span
            className="p-1 px-3 bg-blue-500 text-white rounded-full"
            key={tagSlug}
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default TagList;
