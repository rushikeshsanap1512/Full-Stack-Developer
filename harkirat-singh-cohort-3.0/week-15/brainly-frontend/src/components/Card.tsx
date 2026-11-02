import { ShareIcon } from "../icons/ShareIcon"

interface CardProps {
    title: string,
    link: string,
    type: "twitter" | "youtube";
}

export function Card({title, link, type}: CardProps){
    return(
        <div>
            <div className="p-8 bg-white rounded-md border-gray-200 max-w-72 border min-h-48 min-w-72">
                <div className="flex justify-between">
                    <div className="flex items-center text-md">
                        <div className="text-gray-500 pr-2">
                            <ShareIcon />
                        </div>
                        {title}
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500">
                            <a href={link} target="_blank">
                                <ShareIcon />
                            </a>
                        </div>
                        <div className="text-gray-500">
                            <ShareIcon />
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    {type === "youtube" && 
                        <iframe 
                            className="w-full" 
                            // src={link.replace("watch", "embed").replace("?v=", "/")} 
                            src={`https://www.youtube.com/embed/${new URL(link).searchParams.get("v")}`}
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>}

                    {type === "twitter" && <span><blockquote className="twitter-tweet">
                        <p lang="zxx" dir="ltr">https://t.co/j2tyBrGlHn
                        </p>&mdash; Ownership (@ownershipfm) 
                        <a href={link.replace("x.com", "twitter.com")}>
                            October 21, 2026
                        </a>
                    </blockquote>
                    <script async src="https://platform.x.com/widgets.js" charSet="utf-8">
                    </script></span>}
                </div>
            </div>
        </div>
    )
}