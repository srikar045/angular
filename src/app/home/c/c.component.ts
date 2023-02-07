import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  google='data:image/png;base64,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';
  phone='https://t4.ftcdn.net/jpg/04/63/63/59/360_F_463635935_IweuYhCqZRtHp3SLguQL8svOVroVXvvZ.jpg';
  hangout='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAADMCAMAAACY78UPAAABAlBMVEX39/cPnVju7u4Vn1wRmlgbomH8/Pwdo2IPnFhxcXH6+vpsbGxpaWkjpWZubm7+/v4VlVj18vSioqJ6enoVl1h7e3tlZWXZ2dnMzMwAmU6j0rnf398ZkFi8vLzl5eV+wZ2Pj4+FhYWvr6+0zcGOxqjS0tKCqJapqamNjY2dnZ23t7ccilcYkVgAgkh1tZPX6uDg6+ZDq3URgFB0po5EnHGEyqZMtoIvrXG9383R6NxovpIAi0wAe0WDuJ0Aj0diqIXT6d5zw5qv2sTE49SKy6pXtYVDpXNntovN2NNoooUrlWGnwLSfy7RKk3CRuaVbr4Nel3wZe1EvgVsxnmiTwalRn3jeiwlNAAAQmUlEQVR4nO2dC3+aSBeHAdNRhhGMKGJUVk1do0kT221jW7d2293uJdvutfv9v8p7znAVBzWkfR0T/r/dNoEReOZcGUiqKIUKFSpUqFChQoUKiURR+76I/6MoJYA7m11xzTQFvr/v/GDh2Y8nL15fz+dVX/P59Yd3Jy9n99j4lMxevriuVsulUunRI/wvUrk6f/f+ijvCPRNAn7yeVxF3TRxdLVWvH/9wz4xOlZev52VALJfLWeCIXr4+md0foxPt5LpajpTJzdHnL67uBzmZ/QSmLu/GDeRq+d0PZN8XfWdR5WReXtVmbp98duDk9OU1kFarm8FLpTR59UQ5YGens3dVpK6ugm8zOCe/fnWwJqcv5+WgPbktNzr7T4dpcqq8qEbYt+bmJj/EKKez65h6FXw3bozylwcHTl7NV7A3G1zIjdX85MDAyft5tXpnbjD5i4OKcXJSTSsXN4C/2zfLLSTAzskN4K/3TbOzyEn5i3EfEDh5v06dn7tUUd8dRIzTH0XY+bnVivrTAWR1epXO5Hf1c9D7AwC/FgR3NU/fkuBWX8nu6vTdVuw83HNt32CbRd6Lse/Krb6W2tPprLrd3LdMa77aUoc4/fBou7lzcavl2b7hskXf58Leibstsadr8x2iOye32v5R1pxOfirlwt6NW326b74M0avyDkktr7nB4CdyGpx8IzZ3+Qtxq/N9E4p19Uho7q3YO3PLaXDyQmTu8t2wV7jlNPgMsbZh3427/VI+g9OTUjlFvgYtxN7ZzUEfJOR++kjAeUfsNHf7at+YadFXaj7s23BX2o9la9ogq311c1cq6lw6R59vd/M7m7uitn+QCzzbzTNowvdc0hEcSswNji4Z9+MM7tKHb4R66oOXquLdf6pibvWpXAFOPmSEd+nxsUj0u5rP/VS4+/h0IcSuqKpkt+FZ0Q3cmkDH3z1r8DfYnop3nz6pCbkrct2NZoe3msl9DuAbuLsNVcgtVSWjJ+ojscU3cAP4Ju6LhgC7on6QiRtuQTFab8mN4Bu4U+ABd1UqP7+O3r9MMOO3G7kBfBP3KnjA3ZYqsVWFPclW7vOjTdy1JHglkFSdy0zNyX3+czZ3rZYEj7hluhe9ysvdfZ7FjdigozVuiRZdoIzl4+5u5Q7BKxG3RA+F6ctc3N3uDtwBeMStvpOI+30e7u4u3I1G4yiJXVF/eQjcjYYPnuCWqHH5atwcuwGuLin3SQ7u7s7cYPGYuy0T98evw91orIGrUtk7h5+fb/HzFewYXG3LlNdy1LHzrfZurHAfBeZufyMR91U7J/dFtr1jYvz/yAcHbpluwHP05z53bSt3hI2uDpW8/VGePlVRSqKfA9zKDbea2X4eYh9xbN/VVcmekdGnWeDqyrriKjdgg72F+wN7H4Xyv+TcVxJxk1/8dd817FLpz28T+jXi/u0csS8ubpK7fw/Bj3/n3DF18CXGt0xv8EEBz3rkUbl4Fun70wjsU8B98SSh36LdfyxqaWMH4I8kMrdCf2hnP+ypnQfqPom4tWfnFyvC7mxxGXH/tqitGZtL/VOidA6qbHjKVQt6lAT3r993Y95aeOsVc58vGuvGRrU/S8UdBrhYjTT38R9PuuvYMfevTwI3b6SwJXtuAAG+wdHB4j73IuL+dJ6i5mnsMpqWwM1T1FDBlzKlNdBsk6ODxVe5uZunqJP2fnbREGBjv/azVG4Ojv7zJkfHGE9wH/913hVgh9y8igmxK5KFNzj66UZH9y0ecB+ffn9+sU4dcXuBudeowc1lWj3n0o42cwP4RcDt/b1i7viey+c+/utJbY07uAut7RtzTeTNZkcH8JD707MEdvJek3Mff4u9uRC70n4jmZvjjxost3CXGsh93Pkn6eWNFPex9t06drTItJSpOQ9E3m4zeOno9Nj79u/zDGzO/fs/uOKQga3+Kx+2Qq+2Glz9+dOz7xOx3Ujp5tOzJ4tabT2Nh27+UTo3B5HLrQZXa91E4U5jQ+XCjRnGBnPL1rQEmm1L6RjjmdSiTiVJDea+lNHcYPDPWw0OMb4JW1y9ZM5qvv7dDq4e5aSutCW7BY1FXy13A9+FOo2tLuX9IVHyZku3GoDnwVb/k9XcILrl9iQAv7WPq6oqb3Qr2LXVdgAvHd3a2Gr7rcTmBk8/3R7iQHF0S2ODuWcSmxtkfd4C7r+vcnQrY4O5ZbvxXhO5bGeDx++jHe1obB9bvdg31naRtxngqfdNdzc2eLlcy4liUQG4uq7K7tiSJ7VQ5O1KjAuYM8DF1KqEyyxi0ctl+u3xXcCzsJenB+DlXOTzYjt2CjyLWpVwdSlT5PS24JnY6s2hWBtFZjeVTNx18GxqdSF5x5ISVSC7baMGbcNenh6Ol/sipxcbTR5AZrUqAfZna98ctxaZbTB5GlZIfSiVOy3y6kZMnkmdwn6+b4KcovRjd408GzodFzfaQeW0pIiySr4Beg37wFJ5SkQ5fb7YAXotCS5kXmLZRZReXXaXlUxuf0bWsA/3V0NHomD0y+5iWREZ3XeFNewfDx8bBeivPv+3WCyOQkShc983bBQlFp2dfn77/KYL/As1m/peOPmKKCX4Dzdomva4nUkNKe2eYcciJ9ncNwddwDaLZnK3D7hd2a5M7uXbw/wN/zsqi3v55j5TZ3IvTg/vxvNWEnK3u/c3kQcScS//u9ehzSXgXkj/FOwLaI27fXMP/kGm7UpzLy/vv4+jVrnb3fuex0OtcC/fag/Bx1EJ7mX34BbJ8yvmXrx5GJHtK+RePj/Ef3cqv3xudPEHZGzF564sPj8kF+cC7sWbB5PFY9GPbx9WYEd6mNSFChUqVKhQoUKFChUqVKhQoUKF7rcIIZZFHtqitqW59f7Z2WTaIQ9o2c/qTBgzTJDBmm5+cFLX9ebBzBtVxo6p6zpyw5/OWe7X50jdMO0sbs1L/h4Wz9v3b2WhyoAhrt6vTwaOoeuGnveSSN00s+xNdWZGu2jHcer7dowBsLJJB7KaZWlT03Rye/pGbtvUE9zMGH8dbsva7QUKa8LAw0dW4NuWNnBzv3khAbc1GPR3CVM6csDJvfgaKM1fymTgNozmLgBW09TzO3ZKMnDDFezATVvg5f1Mx6bg/tRKHIdieV/pbnA3bIQdJMlNLByXPFQGN8V2KTwe+trKhvjbyA1xQzQg4Z38K4rcJNjojxSCkbGhs1HGBFHFnTTt5sSNHtJb3vDMtgfjTjhTlOKQwVTxem6PWiE3UXp92DxMPOcWcxMF+qX+ODiD12pBLzHs94fhCSgdwf6pZymtluezdIaT/qTn+QM6nVZwSK3V0qjX6pimDRs9HNmCI016wmftZAAlO57aWLivZTOo6KbJ7FFgmzF0N5AODGfiXyjxmnwI08cOc6yQm4xMfzOLI0jITUY6M0DMbuF3E8fR6g6cwwiqHB4fvmPOWHOcCWyi2pnDP8Dq/Di64/g2IVPHcS34MDQijDlTEo00hVFs6+YgnNtOL9JUg2ty+KUz+NPPALQPR4VTYt0b+J8woyGwJ+QmLuZKvtnpRZ5hm7YVyePcdMSwQ8S5Yx2KbY8OjaM9gDOwIeHTA2UVvmdsohswFdSD3srRBzDR/Apo0zQD7h5McpJbaRomG5zBSEfkz3oc3tR1WCinQzw4BDtzWy7S4mVZY6x4w1FrCpRGH65Lgy/YAIac4elCbso/ORl1XDCx06ERtz6IZXJuBNII0SYMsxFyGzbeIQyZbmj8+MaZB9/3wM1MdAHbNAYwgLowr2D/FDfpuCNTt0eu61k9Zp5pxKI95jQF9gbus4gbr94Xa1l9YJpCAiFwCBwEk6+btmdRuImB6IBZJDARbAxXQciQxdzWBMzl8nE4qyTk9jvhQDr3c68+waxJrYnptCjn5iUVTs5cCkc1+zxHWSOG3GTKzAGPMOLpOKUpbshymNfg1Hgs1uKHmroCbAoEdmgR14i5OxqcaeLPCFyVzjwLUqDDDwXuZnA3ASMMfCwLjhNy+5+kkLIG2P8GBkd7N2P53DCp/PNWh7EpgWs1xvyUxGXGkBAwd3CvgEeuW3AMwws4YQRsSHHHdQwStjHkaV94a00QqZOoBThVMLmOB8ZnreCSwdKsB5U+SgU4E7oCNTBMXHAZITfahnUsb4y5jdlTLfLztfgG0/XOdIjJSc9ETrCRH4tQXmEGPBbHYAsxNSdyTkXB0MjmxmBjg+FIExcy9O1gjiNZQ/BTawomje5PwImHFtOjXgPOojsaTo0XT03IDZtNSAqYh/sQDOGZBPmcYjnwE4oecHci7jpMoDEMP6IZsKGV2IAepmVzc4eAKzAGPfGrcmA4tnrjSXiuE3IPM7m9mLuHaQ1MrQ+9RMsjrGMQ8TokSnesh9zeKvd0E7e5iRtSwNjGVQXWFN1XQ6qAIE325NYU3RevPgwA7jM9y45TIMa6qaBDBzUCKlLSz7HQuauRJeCGazWbGmYhiG8BN1SxeujnHt/ghCkHLgFqSTKfT40UNyQP6rlwRUZf6OpNLErxS2U8e9u+4wYBwB2/hWnaCczLywBJpr7+Sl7TIe/zih83SwJuyBJBfgjyWIobQjjMuThFsAHKWXwEcEpou5gSXkDKz4mG+QpriuMJsBEQquYIyhGkNEurw7cO9GfYybER78+xh4ccgn8NFJ6FsVL1CC91Lh/iJutYvLkDbVWifgu4eeqkysBc5+b7/b6H4kTXLTgvlFZ/IpATT+VXK+6SnNsI5qo38HMiXFOYn1dFWthusebQHY16E2zGHDw2bUHTxYae5g35TEBb0Yfy2nQ1bTQwcCIUv0EZB0PivgVnkn9yilEe5/M1Px8aUJ8JTPaZIYhvfiCAwwF4xjrxAw43KNDp2DxKwRQW4R2Fz90ETKhf1Dag5SNgb9tk4vUj0tFxoclgvLOEiuvPMRk62JWafCZ4Itd0ODvDllf36yjpRUNW+tRwM05YmIgE3NRzYCKnvTr4m4ibXwIbwAATl79ggzX1N4xtw7cihpo97A11ZvvcPF9NzkakhSN77tTOim/0oqGJxCjDGYT3QhDpfiMTOhe2+nwYeIe/UmG5Bh9iGhMe3+AuuK4YboZPJvpzluR2WJ038riEi7clzEFu5oR1jO+HzBIO6JgG39DzqxP4Effv4AjM6btwX8I/O8CeH0J/ZMAoP5+LsfHjWq8PtzYOs+utOLdDJdAZdBX1cDmGEvfMgFGD6M6UaGP4HOt3eN9CevX6mPqbbeY48SdBY3+XL29S76F1On04nj5WtEkdusxefeKnIBrshyDkA4a8jnFQr44nhHYoaJhaZ3Aiu0c6k0kQxr2BbvfxGoKRG191h5DRPA0b+aQjQFL0tOTCA8VhStwD4U/x4wYs97alBHewCk+nq59UyMoyRLB2AcfzNCVcy4iH+L8dAEsRDqAY6kHphmPCkeNj8QH+wkdoC1wgxS9SIzMlnJeNk0XdoE+FxLq2bHP3R07gcMFXUEoTyyO7H/mrPPYiPQPSNb/p6TiYaL/08YeOM+Yugy2MvnX8/0twww7ZdASe5mJu++IPQPC2j008CtkHVzD2/ZwhFl97Z3oT6+DXuC7C12NsG2vi3h+vrGiChY0X/XHupw0bRFq2v0hmSGRtlOUO+G3kYPR1fryV0tF4Mhm70v1QCqXeyG1pX+99gdRyujyid3myVKhQoUKFChUqVKhQoQer/wG8Ck2Jj5eCpAAAAABJRU5ErkJggg==';
 mail='https://mail.google.com/mail/?view=cm&fs=1&to=help@startapps.com&su=Problem in (ur Problem)&body=Describe&bcc=help1@example.com';
  constructor() { }

  ngOnInit(): void {
  }

}