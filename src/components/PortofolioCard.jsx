


import PropTypes from 'prop-types';

const ProjectCard = ({
  title,
  tags,
  image,
  link,
  classes,
}) => {
  return (
    <div
      className={`relative p-6 rounded-xl bg-zinc-800 hover:bg-zinc-700/50 ring-1 ring-inset transition-colors ring-zinc-50/5 active:bg-zinc-700/60 ${classes}`}
    >
      <figure className="mb-6 rounded-lg aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="img-cover w-full h-full object-cover"
        />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <div className="flex flex-wrap items-center gap-3">
            {tags.map((tag, key) => (
              <span
                key={key}
                className="tag bg-zinc-700 bg-zinc-50/5 text-zinc-400 rounded-lg px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          className="text-sky-400 hover:text-sky-300 transition-colors"
          aria-label={`Visit ${title} project`}
        >
          <span className="material-symbols-rounded text-2xl">arrow_outward</span>
        </a>
      </div>
      <a
        href={link}
        target="_blank"
        className="absolute inset-0 z-10"
        aria-label={`Visit ${title} project`}
      />
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ProjectCard;