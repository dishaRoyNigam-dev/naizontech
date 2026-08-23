alter table public.enquiries enable row level security;

grant select on public.enquiries to authenticated;

drop policy if exists "Authenticated users can view enquiries" on public.enquiries;

create policy "Authenticated users can view enquiries"
on public.enquiries
for select
to authenticated
using (true);
