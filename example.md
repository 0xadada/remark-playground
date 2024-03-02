a collection of remark tools

## Image gallery

Image gallery

![Engine intake](/static/images/2015-08-15-raspec-impreza-engine-intake.jpg)

![Engine intake](/static/images/2015-08-15-raspec-impreza-engine-intake.jpg)
![Engine intercooler](/static/images/2015-08-15-raspec-impreza-engine-intercooler.jpg)

## Blockquote

Blockquote with citation.

> The air traveller only travels after he has landed.
>
> <figcaption>—Marshall McLuhan[^1]</figcaption>

[^1]:
    McLuhan, Marshall, and Lewis H. Lapham.
    _Understanding Media: the Extensions of Man_.
    Cambridge, Mass: MIT Press,
    Print. 1994.

Output

```
<figure>
  <blockquote>
    Bid me discourse, I will enchant thine ear, Or like a fairy trip upon the
    green, Or, like a nymph, with long dishevelled hair, Dance on the sands, and
    yet no footing seen: Love is a spirit all compact of fire, Not gross to
    sink, but light, and will aspire.
  </blockquote>
  <figcaption>
    <cite>Venus and Adonis</cite>,
    by William Shakespeare
    </figcaption>
</figure>
```

## Citation

<cite>book 1 </cite>
<cite>book 2 </cite>

# Plugins

## remark-gfm

Provides footnotes and more from [remark-gfm](https://github.com/remarkjs/remark-gfm).

Autolink literals:

www.example.com, https://example.com, and contact@example.com.

Footnote:

A note[^ipsum]

[^ipsum]: Big note.

Strikethrough:

~one~ or ~~two~~ tildes.

Table:

| a   | b   |   c |  d  |
| --- | :-- | --: | :-: |
| aa  | bb  |  cc | dd  |

Tasklist:

- [ ] to do
- [x] done
